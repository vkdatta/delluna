export const name="rewind-circle-thin";
export const id="dl_5da96483416b40cc9f41";
export const url=new URL("../icons/rewind-circle-thin.svg?v=717533237270b7ebce124a053c5d6fd06c0a62f4b4a0e0cca9528c1f1c793e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
