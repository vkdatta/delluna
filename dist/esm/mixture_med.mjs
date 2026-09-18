export const name="mixture_med";
export const id="dl_f97c105534ad4f96862f";
export const url=new URL("../icons/M/mixture_med.svg?v=99c23b5d91bcd275b6f56f6d51179186553856193e4de0fe784f5bf6a96462d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
