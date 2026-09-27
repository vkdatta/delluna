export const name="siren_question-fill";
export const id="dl_0ee886211044b2e95845";
export const url=new URL("../icons/siren_question-fill.svg?v=e9a9601815ee51e1851ca34cb8dd1f9fccec5a60eb46630c15030eab97ea0ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
