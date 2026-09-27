export const name="copy-simple";
export const id="dl_18ddb474456f4f93aae9";
export const url=new URL("../icons/copy-simple.svg?v=418eb38a6f4c1305216ba3462cdbc1bd608a551cdd95cfceae8e1507e51604b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
