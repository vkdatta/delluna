export const name="ink_highlighter_move";
export const id="dl_67ba5e831eed8ab11300";
export const url=new URL("../icons/ink_highlighter_move.svg?v=7200cb8e544c02ab10009d92b475ce2bb83855c4c58335c0405de17ffae342f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
