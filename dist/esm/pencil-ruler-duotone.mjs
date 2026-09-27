export const name="pencil-ruler-duotone";
export const id="dl_1495596624cf40eca01d";
export const url=new URL("../icons/pencil-ruler-duotone.svg?v=73ac5338fe7f22c28ed1edbcf3aa856ea6aa67a4c2bbc606324ba3bd3bd7510f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
