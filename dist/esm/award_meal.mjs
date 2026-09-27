export const name="award_meal";
export const id="dl_0b335705959cf6b7a626";
export const url=new URL("../icons/award_meal.svg?v=fc64fce4c7c7d7de9931df65364d0934bb493c4124debbc8ccb3a0b3ae3f9404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
