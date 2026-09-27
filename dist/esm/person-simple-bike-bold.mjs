export const name="person-simple-bike-bold";
export const id="dl_02a77758d2c54e76a525";
export const url=new URL("../icons/person-simple-bike-bold.svg?v=368f1ee1ea38115de94c5d778d5b15cc61f09b6f71d18d7dd076f6dae877dab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
