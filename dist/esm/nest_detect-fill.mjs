export const name="nest_detect-fill";
export const id="dl_f70ffbe8f8f567772204";
export const url=new URL("../icons/nest_detect-fill.svg?v=a7065f44be9bf47bd89f383d7fbd431db3e1fdfe2480245bcf9254d9adf372e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
