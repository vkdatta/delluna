export const name="smiley-angry";
export const id="dl_8902266b0184a451c133";
export const url=new URL("../icons/smiley-angry.svg?v=4acf1fd59615220ee443262c10a9c6a542c94212bbd684cc25666afe986db2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
