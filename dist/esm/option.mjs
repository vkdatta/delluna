export const name="option";
export const id="dl_f40aee25173941fc8b8a";
export const url=new URL("../icons/option.svg?v=8ab95149bbb90b717e4397e535f8f086cdeaf4296373367a6c24a4e4243b76c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
