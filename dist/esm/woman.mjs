export const name="woman";
export const id="dl_0a92a881f4682b65abb0";
export const url=new URL("../icons/woman.svg?v=4c182a13833ea375dfeadfa30642c2f089541bbb82c69a286aa7e58925c8c63c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
