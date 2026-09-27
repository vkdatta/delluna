export const name="dot-outline-thin";
export const id="dl_528d30d32ea84ebf9898";
export const url=new URL("../icons/dot-outline-thin.svg?v=4586169a7227c33d730b002c180c7b319e72e0b843474d6dbbe2c568c987a393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
