export const name="gender-male-bold";
export const id="dl_8a68811fe1a34d66acf5";
export const url=new URL("../icons/gender-male-bold.svg?v=b7cca2c54f73ec46d7f55571496d18c8594ae8a3f2902b0ca848c04f84475dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
