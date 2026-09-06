export const name="cassette-tape";
export const id="dl_5fb7052062fb4de8b6e5";
export const url=new URL("../icons/cassette-tape.svg?v=d2d522f1e3ad56b56f1a21da599d656cd10b590bb585ccef0f86972e3174c55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
