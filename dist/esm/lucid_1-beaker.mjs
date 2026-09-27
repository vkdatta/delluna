export const name="lucid_1-beaker";
export const id="dl_8e9cbfb3c2c344ecb8a8";
export const url=new URL("../icons/lucid_1-beaker.svg?v=ba76b8df353f777648793690f065886edc11cf50e597148943dbef8e08f15e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
