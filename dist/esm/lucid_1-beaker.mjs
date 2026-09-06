export const name="lucid_1-beaker";
export const id="dl_8e9cbfb3c2c344ecb8a8";
export const url=new URL("../icons/lucid_1-beaker.svg?v=d870067d6528869d7704a9bb95444aa753435de6106e6eb25ef2874708108ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
