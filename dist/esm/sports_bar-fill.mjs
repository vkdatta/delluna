export const name="sports_bar-fill";
export const id="dl_819d68710b9f1859427d";
export const url=new URL("../icons/sports_bar-fill.svg?v=3f93b166728ced9df4e022c4e0f7452afee78877769cbe3c1ee46fd0733430eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
