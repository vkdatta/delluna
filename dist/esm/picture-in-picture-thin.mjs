export const name="picture-in-picture-thin";
export const id="dl_403a6decceff41febed9";
export const url=new URL("../icons/picture-in-picture-thin.svg?v=00a8a50fc02b74c781a568cd68ed120b9c64cca9f4e78ee4820b6273c848d43d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
