export const name="pipe-light";
export const id="dl_8b49415d827d49ccb5fe";
export const url=new URL("../icons/pipe-light.svg?v=b4aeed948a89639463d04b242e1ec15cc948d92d63b66fe4a62944fe3da321db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
