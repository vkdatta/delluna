export const name="mosque";
export const id="dl_b36c77d801814123907b";
export const url=new URL("../icons/mosque.svg?v=fc2b9c42975f5682cdfe89a2e47c3b78ceb959495f14430dc9a3fceb53f6aab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
