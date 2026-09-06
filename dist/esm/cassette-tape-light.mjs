export const name="cassette-tape-light";
export const id="dl_396c04df83d14bc1baf9";
export const url=new URL("../icons/cassette-tape-light.svg?v=4dc45efe65b04010a9e51aac73677eb150cf5d298b4dd667eefa70b4e29388f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
