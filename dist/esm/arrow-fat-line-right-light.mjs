export const name="arrow-fat-line-right-light";
export const id="dl_3636d28fe73e4374b23b";
export const url=new URL("../icons/arrow-fat-line-right-light.svg?v=18828ebd123d0093560f4ebfd33b522b14514a393ff750cae870add9ba9a0f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
