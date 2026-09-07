export const name="asterisk-simple";
export const id="dl_7a94d1397ea148188587";
export const url=new URL("../icons/asterisk-simple.svg?v=b5dff38fb67f62d383d195b492e92858987713584c08ba9e8cf0bd5b58892653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
