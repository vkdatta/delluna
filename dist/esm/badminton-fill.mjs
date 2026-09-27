export const name="badminton-fill";
export const id="dl_b92525b2f2079e88033a";
export const url=new URL("../icons/badminton-fill.svg?v=8656e705180c7e2fcdfbd14ef61575034012ba1fbbb415517082f2f4fb36a29e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
