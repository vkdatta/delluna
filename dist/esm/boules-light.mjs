export const name="boules-light";
export const id="dl_876dc35f9c3143f6abcd";
export const url=new URL("../icons/boules-light.svg?v=879660cc9ec0a323acbef5a232e4a710630dfe8f6d269f948a718dac8d7397c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
