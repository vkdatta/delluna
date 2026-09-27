export const name="broadcast";
export const id="dl_ec55c72aba3f4558b1ab";
export const url=new URL("../icons/broadcast.svg?v=96ebf7c79393c901bb989cceedef71893d78e01cf66fa420c9737eab11a17370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
