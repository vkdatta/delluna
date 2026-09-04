export const name="horse";
export const id="dl_af6df556eacf48d8b55d";
export const url=new URL("../../icons/H/horse.svg?v=396c7c701474b4b77c36490dc7676d4ef6d8a8626688c728b7c795fb7aeb2c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
