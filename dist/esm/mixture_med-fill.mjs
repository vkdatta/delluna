export const name="mixture_med-fill";
export const id="dl_77f6856b20c24717ba44";
export const url=new URL("../icons/M/mixture_med-fill.svg?v=48e7549111de4431cf66ab6e726d9261f4a7211703f28a9db53d99fe5193158a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
