export const name="not-equals";
export const id="dl_18f7df8e480f4a86b2a7";
export const url=new URL("../icons/not-equals.svg?v=87d026a546fea864d237de597e995b5d1d7bc5a47a03cf53fcd71482449ad690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
