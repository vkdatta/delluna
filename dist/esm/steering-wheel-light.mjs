export const name="steering-wheel-light";
export const id="dl_f8eba35f15eb4cd4bbc1";
export const url=new URL("../icons/S/steering-wheel-light.svg?v=e1edb3bccf5fa31ff5cf3852ba037e06fcfb10ec114181c5b633e64863647a51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
