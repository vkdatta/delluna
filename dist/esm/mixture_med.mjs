export const name="mixture_med";
export const id="dl_9a8a22f7cf198766daf5";
export const url=new URL("../icons/mixture_med.svg?v=023a072b9c15109e77a7e03068c0d0ddea9f834509f44c1f6bb0f9ebe18eb726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
