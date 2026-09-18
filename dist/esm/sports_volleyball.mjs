export const name="sports_volleyball";
export const id="dl_71dc51723a024b5196d0";
export const url=new URL("../icons/sports_volleyball.svg?v=db61f1beb3d035c69423d7e0c218e9ddbddc15cb6b0407986f75000f5e4743ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
