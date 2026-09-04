export const name="behance-logo-thin";
export const id="dl_edd7e9481add40f2a033";
export const url=new URL("../../icons/B/behance-logo-thin.svg?v=69612224f80e8a5fb7b249e88bdacdc89d40990cefcc1849a486b61853194ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
