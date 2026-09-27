export const name="heart-bold";
export const id="dl_4f13095b31bc410bb984";
export const url=new URL("../icons/heart-bold.svg?v=cc5d9624f5bed6fa250700455eb5885148682ade3670bd7734b09ecccf22d222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
