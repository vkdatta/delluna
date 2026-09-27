export const name="phone-plus-light";
export const id="dl_259a7275af104aabb7a7";
export const url=new URL("../icons/phone-plus-light.svg?v=d6dc9682af5a712f3683fbbdbcebff9c8391d397b3ca7f6f09a400be6c6c8bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
