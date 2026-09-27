export const name="option";
export const id="dl_f40aee25173941fc8b8a";
export const url=new URL("../icons/option.svg?v=d4958324b6752f19346fb03ac17b2bf1f50cc7e02b0c15e13266204ee9b83cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
