export const name="minus-square-thin";
export const id="dl_8592c80918ff454fb8d1";
export const url=new URL("../icons/minus-square-thin.svg?v=9f9dc8998b642d007f0fbf3808ded61af284622a5dae0ba7f2198f5df7750b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
