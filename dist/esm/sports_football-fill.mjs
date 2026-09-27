export const name="sports_football-fill";
export const id="dl_42d95b383993147be6aa";
export const url=new URL("../icons/sports_football-fill.svg?v=1c65e4d11fcdee5c33d27c4fdab915546b8665b4b87f778eb4598af7690e73d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
