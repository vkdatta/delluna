export const name="info-thin";
export const id="dl_5a6127fa4b7c40e0b0fe";
export const url=new URL("../icons/info-thin.svg?v=ddc5a1363a7af7b33d3bc5fa50e0091f2a60bc5ba6ffc5a3729fa6db703d5358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
