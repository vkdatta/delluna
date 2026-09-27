export const name="lucid_3-party-popper";
export const id="dl_9989bd2242ab4342a903";
export const url=new URL("../icons/lucid_3-party-popper.svg?v=ec464e79cc71c556c69f7c828982171ac5c004073cccf1ed2553c11a2809ed80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
