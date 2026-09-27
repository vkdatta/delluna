export const name="upload_file";
export const id="dl_87dd90aaf50e9c3049f7";
export const url=new URL("../icons/upload_file.svg?v=9c1dbcd0ff2435c8d50a20b89623876ad355ba778ab51f7ac627a0d1de65128f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
