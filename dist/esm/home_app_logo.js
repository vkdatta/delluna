export const name="home_app_logo";
export const id="dl_356c4ed840a47771660d";
export const url=new URL('../icons/home_app_logo.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
