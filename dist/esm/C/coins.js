export const name="coins";
export const id="dl_d048e7b93bb347ed98eb";
export const url=new URL("../../icons/C/coins.svg?v=3f29a7e8d121120ea73dd4db9b323f0bff63298ddf1f47a95f8a507023720e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
