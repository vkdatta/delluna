export const name="arrow-elbow-right-light";
export const id="dl_37aac7f8cb8c427aab49";
export const url=new URL("../icons/arrow-elbow-right-light.svg?v=40f0a96e1eb22e9a1f7b5c840d41aed1621c26968ef63ce94e8d6014ea02da5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
