export const name="mobile_question";
export const id="dl_014566eb57d52dbfbd36";
export const url=new URL("../icons/mobile_question.svg?v=bbc195ff497ff20475952abd5651c51154f5b5491fe93bba8c47a18868068920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
