export const name="popcorn-thin";
export const id="dl_e451a215034e4e79a884";
export const url=new URL("../icons/popcorn-thin.svg?v=8d228ed7d1b40adc5d2b17cf936d331146248bd9954790caa7a239fe62cf4b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
