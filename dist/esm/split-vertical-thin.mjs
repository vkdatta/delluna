export const name="split-vertical-thin";
export const id="dl_c2a17f27d21f81f6c990";
export const url=new URL("../icons/split-vertical-thin.svg?v=911a0fd3daf936711a4b926f9002472ba7ab5b47cd26c08b53c6fc99be0a44e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
