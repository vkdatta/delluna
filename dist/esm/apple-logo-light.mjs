export const name="apple-logo-light";
export const id="dl_e5b7a373f66e47f9a93d";
export const url=new URL("../icons/apple-logo-light.svg?v=a3244164620f06d6d5bc8d71bf313e6487051fd65df28672b1d2e7076f84acf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
