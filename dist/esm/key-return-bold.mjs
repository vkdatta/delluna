export const name="key-return-bold";
export const id="dl_ad0d08908a0c4ae9a359";
export const url=new URL("../icons/key-return-bold.svg?v=d66e4124aafbfc50f6d5a05fc5e6949be022e54035038025d7ca20d6154d6e52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
