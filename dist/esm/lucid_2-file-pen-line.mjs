export const name="lucid_2-file-pen-line";
export const id="dl_39ad5fa48be34fb29639";
export const url=new URL("../icons/lucid_2-file-pen-line.svg?v=75c8a6974889b64948b297cdee6b734a3ca69cec34cb6b93fec5714e89c7edf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
