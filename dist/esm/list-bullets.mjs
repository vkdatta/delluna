export const name="list-bullets";
export const id="dl_632974164b1e4a81afec";
export const url=new URL("../icons/list-bullets.svg?v=f36558c54b06c209f59ca6d918ce94ccc61ec82da9b0bdd3064cdafedad6f9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
