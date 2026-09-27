export const name="washing-machine-light";
export const id="dl_7c8684d02c2bb4ffdb02";
export const url=new URL("../icons/washing-machine-light.svg?v=1d9b38b20d14679788f34428cf1673e94df095096218d8be2b1626f293994630",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
