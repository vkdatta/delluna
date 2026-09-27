export const name="flower-light";
export const id="dl_56bc355e1bbd4b5aa5be";
export const url=new URL("../icons/flower-light.svg?v=e9a44a44caa2bef81391761206b511b130e0ac76e64da1a53d197f9273f4ee61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
