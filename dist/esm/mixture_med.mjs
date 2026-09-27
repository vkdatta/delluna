export const name="mixture_med";
export const id="dl_b14e90644025d4df3ebe";
export const url=new URL("../icons/mixture_med.svg?v=a137155fdac54303b7494fe851ed92f3801de06827a4698ddd17b69a26e7d0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
