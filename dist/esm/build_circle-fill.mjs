export const name="build_circle-fill";
export const id="dl_41fd321200864b1289d8";
export const url=new URL("../icons/B/build_circle-fill.svg?v=32dd36ee225b3a1e3a6300fd0d1caef8ca7e8040db7cb6e964fb45f72037c42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
