export const name="lucid_1-club";
export const id="dl_a6e94b4810f4412688d0";
export const url=new URL("../icons/lucid_1-club.svg?v=e2bf3ac7cd983abbbd309d6a58a5150257effb310ebb08117386151c252f3340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
