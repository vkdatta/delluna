export const name="tip-jar-light";
export const id="dl_8e93a3f827301d01ff53";
export const url=new URL("../icons/tip-jar-light.svg?v=33ed0dabc28a7e87347f2a030084d80aba2bd42f4e52df1d83ff269c7934ba1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
